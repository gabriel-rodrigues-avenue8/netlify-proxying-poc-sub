export const SubAppComponent = () => {
    const { search } = window.location;
    const args = Object.entries(search).map(([k, v]) => k + '="' + v + '"').join('&')
    return (<div>Sub app component {args}</div>)
}