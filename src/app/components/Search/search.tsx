export default function Search() {
  return (
    <div className="flex gap-8 items-center">
        <input placeholder="@username" className="bg-transparent border rounded-xl border-secondary w-3/5 min-w-64 h-8 px-5"/>
        <button className="bg-primary border rounded-xl border-secondary h-8 px-5 self flex items-center">Buscar</button>
    </div>
  )
}
