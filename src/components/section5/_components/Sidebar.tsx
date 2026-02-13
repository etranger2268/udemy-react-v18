import { LINK } from '@/components/section5/_constants/link';

const Sidebar = () => {
  return (
    <nav className="flex flex-col gap-3 text-xl font-bold">
      {LINK.map(({ href, alt }) => (
        <a key={alt} href={href} className="border-b pb-1 border-gray-300 pl-2 hover:bg-amber-100">
          {alt}
        </a>
      ))}
    </nav>
  );
};

export default Sidebar;
