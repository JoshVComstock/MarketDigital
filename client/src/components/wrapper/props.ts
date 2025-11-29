type TypeWrapper = "SECTION" | "MAIN-CONTENT" | "CHART" | "MAIN";
type ContentType = "ROW" | "COL";
type HiddenMedia = Uppercase<"sm" | "md" | "lg" | "xl" | "2xl">;
export interface Props {
  children: React.ReactNode;
  title: string;
  type?: TypeWrapper;
  contentType?: ContentType;
  maxWhidh?: number;
  hiddenMedia?: HiddenMedia;
}
