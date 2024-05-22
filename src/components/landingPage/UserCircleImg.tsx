export default function UserCircleImg({src} : {src: string}) {
  return (
    <img
      src={src}
      alt="user image"
      className="inline-block h-10 w-10 rounded-full ring-2 ring-slate-100"
    />
  );
}
