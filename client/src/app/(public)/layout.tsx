import { Sidebar } from "@/components/sidebar/Sidebar";

const PublicLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className="flex bg-background-dark-500">
      <Sidebar />
      <main>{children}</main>
    </section>
  );
};

export default PublicLayout;
