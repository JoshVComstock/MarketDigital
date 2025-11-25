type TypeWrapper = "SECTION" | "MAIN-CONTENT" | "CHART";
export interface Props {
  children: React.ReactNode;
  title: string;
  type?: TypeWrapper;
}
