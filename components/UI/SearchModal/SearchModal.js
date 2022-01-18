const SearchModal = (props) => {
  const loopComp = (comp, digit) => {
    let thumbnails = [];
    for(let index = 1; index <= digit; index++) {
      thumbnails.push(comp)
    }

    return thumbnails;
  }
  return (
    <div className="search-modal ">
      <div className="search-modal__input-group ">
      <input className="search-modal__input" type="text" placeholder="search for a title" value="" />
      <div className="search-modal__close-btn">
        <i className="fas fa-times" />
      </div>
      </div>
      <h3 className="search-modal__title">
        Popular Searches
      </h3>

      <div className="search-modal__thumbnails">
        
        {loopComp(
        (<div className="search-modal__thumbnail">
          <img src="https://cdn.shopify.com/s/files/1/0057/3728/3618/products/108b520c55e3c9760f77a06110d6a73b_e97cf224-d57f-44e3-8477-4f5479cd746b_480x.progressive.jpg?v=1573616089" />
          <div className="search-modal__top-player">
            <i className="fas fa-play" />
          </div>
        </div>), 10

        )}
      </div>
    </div>
  );
};

export default SearchModal;
