export const Loading = () => {
  return <button className="rvt-button rvt-button--loading" aria-busy="true" disabled>
    <span className="rvt-button__content">Loading</span>
    <div className="rvt-loader rvt-loader--xs" aria-label="Content loading"></div>
  </button>
}
