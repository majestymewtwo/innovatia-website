import "./SocialEvent.css";
const SocialEvent = () => {
  return (
    <div className="h-full flex justify-center items-center">
      <div>
        <div className="col-12 mt-5 d-flex justify-content-center">
          <div className="box">
            <div className="box-body">
              <img className="img" src="/pixelperfect.png" width="200px" />
              <div className="box-lid">
                <div className="box-bowtie"></div>
              </div>
            </div>
          </div>
        </div>
        <p className="text-center w-full pt-2 font-bold text-lg">
          Suprise ME!!
        </p>
      </div>
    </div>
  );
};
// To be decided later

export default SocialEvent;
