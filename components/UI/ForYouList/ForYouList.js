const ForYouList = (props) => {
  const loopComp = (comp, digit) => {
    let thumbnails = [];
    for(let index = 1; index <= digit; index++) {
      thumbnails.push(comp)
    }

    return thumbnails;
  }
  return (
    <div className="foryou-list">
      <h3 className="foryou-list__title">For You</h3>
      <div className="foryou-list__thumbnails">
        
        {loopComp(
        (<div className="foryou-list__thumbnail">
          <img src="https://cdn.shopify.com/s/files/1/0063/8255/1093/products/posters-rick-and-morty-creators-poster-100380-17157441945653_540x.jpg?v=1601499181" />
          <div className="foryou-list__top-player">
            <i className="fas fa-play" />
          </div>
        </div>), 10

        )}
      </div>
    </div>
  );
};

export default ForYouList;
