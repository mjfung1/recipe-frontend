
export const Loading = () => {
    return (
      <div className="container-fluid text-center position-absolute top-20 start-50 translate-middle-x mt-5">
        <h1 className="mx-5 my-5 loader">
          It's loading
          <span class="loader__dot">.</span>
          <span class="loader__dot">.</span>
          <span class="loader__dot">.</span>
        </h1>
        <img class="grandma-loader" src="./favicon/grandma-512x512.png" alt="" />
        <h1 className="mx-5 my-5">You have to wait, dear</h1>
      </div>
    );
}