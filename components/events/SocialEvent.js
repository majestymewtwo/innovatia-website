import "./SocialEvent.css";
const SocialEvent = () => {
  return (
    <div className="h-full flex justify-center items-center">
      <div>
        <div class="col-12 mt-5 d-flex justify-content-center">
          <div class="box">
            <div class="box-body">
              <img class="img" src="/pixelperfect.png" width="200px" />
              <div class="box-lid">
                <div class="box-bowtie"></div>
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

export default SocialEvent;
