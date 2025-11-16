import "@/components/ui/ui.css";

function Loader() {
  return (
    <>
      <div className="container-loader">
        <div className="slice-loader"></div>
        <div className="slice-loader"></div>
        <div className="slice-loader"></div>
        <div className="slice-loader"></div>
        <div className="slice-loader"></div>
        <div className="slice-loader"></div>
      </div>
    </>
  );
}

export default Loader;