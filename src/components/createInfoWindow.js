const createInfoWindow = (marker) => {
    const infoWindow = document.createElement('div')
    const heading = document.createElement('div')
    const title = document.createElement('h2')
    const content = document.createElement('div')
    const p = document.createElement('p')

    infoWindow.classList.add('fs-marker__infoWindow')
    heading.classList.add('fs-marker__heading')
    title.classList.add('fs-marker__title')
    title.innerText = marker.title
    content.classList.add('fs-marker__content')
    p.classList.add('fs-marker__text')
    p.innerText = marker.content

    heading.appendChild(title)
    content.appendChild(p)

    infoWindow.appendChild(heading)
    infoWindow.appendChild(content)


    if (marker.link) {
        const footer = document.createElement('div')
        footer.classList.add('fs-marker__footer')
        const link = document.createElement('a');
        link.innerText = 'Read more'
        link.href = marker.link

        footer.appendChild(link)
        infoWindow.appendChild(footer)
    }
    return infoWindow
}
export default createInfoWindow