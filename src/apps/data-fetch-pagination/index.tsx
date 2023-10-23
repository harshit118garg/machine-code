import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";
import { API_URL } from "./constants/data-fetching-pagination-constant";
import { Quote } from "./constants/data-fetching-pagination-types";
import "./styles/index.scss";

export default function DFP() {
  const [allQuotes, setAllQuotes] = useState<Quote[]>([]);
  const [page, setPage] = useState<number>(1);

  const fetchData = async () => {
    const res: Response = await fetch(`${API_URL}`);
    const data = await res.json();
    if (data && data.quotes) setAllQuotes(data?.quotes);
  };

  const goToPage = (pagenum: number) => setPage(pagenum);
  const goPrev = () => setPage((prevPage) => prevPage - 1);
  const goNext = () => setPage((prevPage) => prevPage + 1);

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div className="data-app-container">
        <div className="top-bar">
          <h2>Data Fetching App + Pagination</h2>
        </div>
        <div className="quotes-container">
          {allQuotes && allQuotes.length > 0 && (
            <>
              <div className="all-quotes">
                {allQuotes.slice(page * 10 - 10, page * 10).map((_q) => {
                  return (
                    <div className="quote" key={_q.id}>
                      <q>{_q.quote}</q>
                      <p className="author">- {_q.author}</p>
                    </div>
                  );
                })}
              </div>
              <div className="pagination">
                <div className="btn-container">
                  {page > 1 && (
                    <button onClick={goPrev}>
                      <ChevronLeft />
                    </button>
                  )}
                  {[...Array(allQuotes.length / 10)].map((_, n) => (
                    <button
                      key={n}
                      onClick={() => goToPage(n + 1)}
                      className={`${page === n + 1 ? "btn-active" : ""}`}
                    >
                      {n + 1}
                    </button>
                  ))}
                  {page !== allQuotes.length / 10 && (
                    <button onClick={goNext}>
                      <ChevronRight />
                    </button>
                  )}
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}
