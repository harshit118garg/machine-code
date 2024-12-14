export default function AccordionItem() {
  return (
    <div className="accordion-item p-2 flex flex-col group">
      <div className="accordion-pane group-hover:bg-slate-100 group-hover:transition-all group-hover:cursor-pointer p-4">
        Title
      </div>
      <div className="accordion-panel hidden">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, autem
        minus laboriosam voluptatibus dolores expedita quos ad quidem impedit
        inventore rem error delectus veritatis placeat officia magni eveniet
        quis perferendis ducimus. Similique dignissimos, ipsam quasi provident
        consequuntur id consectetur unde voluptate numquam aperiam quas rerum
        incidunt, cupiditate, a suscipit doloribus.
      </div>
    </div>
  );
}
