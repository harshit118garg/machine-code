import "./styles/index.scss";
import Users from "./static/users.json";
import { useMemo, useState } from "react";

interface User {
  id: number;
  name: string;
  age: number;
  email: string;
  city: string;
  dob: string;
}

export default function SearchResults() {
  const [query, setQuery] = useState<string>("");

  const keys = ["name", "email", "city"];

  const filteredData: User[] = useMemo(
    () =>
      Users.filter((user) =>
        keys.some((key) =>
          user[key as keyof User].toString().toLowerCase().includes(query)
        )
      ),
    [query]
  );

  return (
    <>
      <div className="search-results-container">
        <div className="top-bar">
          <h2>Search Results</h2>
        </div>
        <div className="wrapper">
          <div className="search-input">
            <input
              type="text"
              name={`query`}
              value={query}
              placeholder="search user"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setQuery(e.target.value)
              }
            />
          </div>
          <div className="results-table">
            {filteredData && filteredData.length > 0 ? (
              <table>
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Email</th>
                    <th>City</th>
                    <th>DOB</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredData.map((user) => {
                    return (
                      <tr key={user.id}>
                        <td>{user.name}</td>
                        <td>{user.age}</td>
                        <td>{user.email}</td>
                        <td>{user.city}</td>
                        <td>{user.dob}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            ) : (
              <>
                <div className="noData">
                  <h2>No Data to show</h2>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
