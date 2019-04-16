Нужно написать одностраничное приложения (SPA) для просмотра фильмов с помощью The Movie Database API.

При открытии приложения, должен отображаться список популярных фильмов с пагинацией или динамической подгрузкой (на выбор). 
Также на странице должно быть поле для поиска. Когда вы вводите туда какой-либо текст, должны отобразиться фильмы которые ему соответствуют. 
Для каждого фильма в списке должен отображаться список жанров, к которым он принадлежит.

При клике на карточку с фильмом, должна быть показана страница с детальной информацией об этом фильме и списком рекомендованных или похожих (можно и то, и то) фильмов к нему.

Также реализуйте возможность добавлять фильмы в избранное как со списка, так и на странице с отдельным фильмом. 
Список таких фильмов сохраняйте локально (localStorage, например). 
Предусмотрите просмотр списка с избранными фильмами где-то в приложении и удаление из избранного. 
Также предусмотрите отображение на карточке с фильмом и его странице информации о том, что этот фильм добавлен в избранное.

Верстка и оформление страниц остается на ваше усмотрение.

Также приветствует развернутое приложение на одном из общедоступных сервисов.
(например,GitHub, Heroku https://www.heroku.com/, openshift https://www.openshift.com/)

Код должен быть выложен на сервисе GitHub с описание установки и развертывания приложения не позднее 05.04.2019

Если вам необходимо больше или меньше времени, то обязательно сообщите вашу оценку. 
Хотелось бы получить от Вас оценку времени на выполнение этого задания перед его началом.

Технологии
При реализации задания необходимо использовать Angular 7.

Полезные материалы

Ссылки с документацией к API:

https://developers.themoviedb.org/3
https://developers.themoviedb.org/3/movies/get-popular-movies
https://developers.themoviedb.org/3/search/search-movies
https://developers.themoviedb.org/3/genres
https://developers.themoviedb.org/3/movies/get-movie-details
https://developers.themoviedb.org/3/movies/get-movie-recommendations

Ссылки на предпочтительные компоненты:
https://material.angular.io/component



API Key (v3 auth)
519f97a672a4fd4e18c7d897738d42aa

API Read Access Token (v4 auth)
eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1MTlmOTdhNjcyYTRmZDRlMThjN2Q4OTc3MzhkNDJhYSIsInN1YiI6IjVjYTMyMmQyOTI1MTQxNDBkOTQ5NGZmOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.HdUD_uZojHERS8F2KemD7_PXtntMfRweSWohKrUB8kY

Example API Request
https://api.themoviedb.org/3/movie/550?api_key=519f97a672a4fd4e18c7d897738d42aa
