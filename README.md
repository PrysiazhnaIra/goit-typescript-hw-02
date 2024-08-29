# Search image

This project is an image search application that allows users to input a search query and quickly find a list of relevant images. Designed with a user-friendly interface, the application provides helpful notifications to guide users through their experience, ensuring smooth and easy navigation.

If a user inputs an incorrect or unsupported query, they are gently prompted to try a different search, making the process straightforward and enjoyable. Additionally, a "Load More" button enables users to discover more images with ease, enhancing their experience by providing a continuous flow of content. This feature-rich, responsive application aims to make image searching not only efficient but also enjoyable.

![page](./src/data/screen.png)

## Застосунок пошуку зображень за ключовим словом

- За допомогою HTTP-запитів отримано зображення з сервісу зображень Unsplash

- Вбудовано індикатор завантаження

- Реалізовано повідомлення про помилку

- Додано кнопку "Load more". При натисканні на яку завантажується наступна порція зображень і рендеритися разом із попередніми. Кнопка рендеритися лише тоді, коли є які-небудь завантажені зображення. Якщо масив зображень порожній, кнопка не рендериться.

- Використано бібліотеку React Modal для реалізації модального вікна

- Додано типізацію за допомогою TypeScript
