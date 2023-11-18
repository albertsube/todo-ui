export default function Button({text, handleClick}) {
  return (
    <div
        className="bg-slate-600 rounded-full h-16 w-16
            flex items-center justify-center
            absolute bottom-8 right-8 cursor-pointer"
        onClick={handleClick}
    >
      <p className="font-bold text-3xl text-white mb-1">{text}</p>
    </div>
  )
}
