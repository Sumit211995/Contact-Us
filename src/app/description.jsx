export default function Description() {
  return (
    <div id="description">
      <div className="address">
        <div className="icon">
          <span className="material-symbols-outlined icon-image">
            location_on
          </span>
        </div>
        <div className="inline-block w-56 mt-3">
          <h1 className="desc-entity">Address</h1>
          <p className="break-all descinfo">
            Rishikesh, Dehradun Rishikesh, Dehradun Rishikesh, Dehradun
          </p>
        </div>
      </div>

      <div className="address">
        <div className="icon">
          <span className="material-symbols-outlined icon-image">call</span>
        </div>
        <div className="inline-block w-56 mt-3">
          <h1 className="desc-entity">Phone</h1>
          <p className="break-all descinfo">+1025-12589788</p>
        </div>
      </div>

      <div className="address">
        <div className="icon">
          <span className="material-symbols-outlined icon-image">mail</span>
        </div>
        <div className="inline-block w-56 mt-3">
          <h1 className="desc-entity">Email</h1>
          <p className="break-all descinfo">
            <span className="underline">loremsdfkasjd@gmail.com</span>
          </p>
        </div>
      </div>
    </div>
  );
}
