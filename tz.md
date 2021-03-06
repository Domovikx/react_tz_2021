Необходимо создать приложение-задачник.
Документацию по back-end можно найти тут:

https://uxcandy.com/~shapoval/test-task-backend/docs/v2.html

Требования к коду: https://beejee.ru/coding-challenge-requirements-react

Задачи состоят из:

- имени пользователя; string&number
- е-mail; email
- текста задачи; string
- статус задачи; 0-11
- примечание; string (определяем по статусу задачи, см.ниже)

0 - задача не выполнена
1 - задача не выполнена, отредактирована админом
10 - задача выполнена
11 - задача отредактирована админом и выполнена

Стартовая страница - список задач с возможностью:

- сортировки по: имени пользователя, email и статусу.

- Вывод задач нужно сделать страницами по 3 штуки (с пагинацией).
- Видеть список задач и создавать новые может любой посетитель без авторизации.

Сделайте вход для администратора (логин "admin", пароль "123").

- Администратор имеет возможность редактировать текст задачи и поставить галочку о выполнении.
- Выполненные задачи в общем списке выводятся с соответствующей отметкой.

Результат нужно развернуть на любом бесплатном хостинге (например - zzz.com.ua), чтобы можно было посмотреть его в действии. Код можно выложить на github или bitbucket.

По ссылке выше доступен протокол тестирования https://beejee.ru/coding-challenge-requirements-react

---

Требования к коду
Тестовое задание нужно решить минимально необходимым набором сущностей.

- Аккуратность кода - это важно. Убедитесь, что в нем не осталось мусора, отладочных инструкций, закомментированного кода.
- Называйте переменные и объекты, чтобы по одному названию был понятен их тип и предназначение.
  См. Стив Макконнелл "Совершенный Код" (глава 11)
- В коде рендера не должно быть логики или вычислений. Вся бизнес-логика должна быть в методах класса, или собрана наверху перед разметкой.
- Состояние всех элементов приложения должно храниться в центральном хранилище (redux, context, etc). Хоть документация и не запрещает local state, использовать его нецелесообразно.
- Текущий URL тоже должен быть частью хранилища.
- Запросы к API должны быть собраны в единый слой. Точный адрес сервера заявлен один раз.
- Из базы должны выбираться только те записи, с которыми планируем работать. Нельзя выбирать всю таблицу целиком.
- Любой повторяющийся код - зло. (См. "Предотвращение дублирования кода" раздел 7.1 Макконнелла).

---

Протокол тестирования

- Перейти на стартовую страницу приложения. Должен отобразиться список задач. В списке присутствуют поля: имя пользователя, email, текст задачи, статус. Не должно быть опечаток. Зазоры должны быть ровные. Ничего не ползет. Должна быть возможность создания новой задачи. Должна быть кнопка для авторизации.
- Не заполнять поля для новой задачи. Сохранить задачу. Должны вывестись ошибки валидации. Ввести в поле email “test”. Должна вывестись ошибка, что email не валиден.
- Создать задачку с корректными данными (имя “test”, email “test@test.com”, текст “test job”). Задача должна отобразиться в списке задач. Данные должны быть ровно те, что были введены в поле формы. После создания задачи должно вывестись оповещение об успехе добавления (обратная связь).
- Для проверки XSS уязвимости нужно создать задачу с тегами в описании задачи (добавить в поле описания задачи текст , заполнить остальные поля). Задача должна отобразиться в списке задач, при этом не должен всплыть alert c текстом ‘test’.
- Создать еще 2 задачи. Должна появиться новая страница в пагинации.
- Отсортировать список по полю “имя пользователя” по возрастанию. Список должен пересортироваться. Перейти на последнюю страницу в пагинации. Сортировка не должна сбиться, задачи с последней страницы должны быть отображены. Далее отсортировать по тому же полю, но по убыванию. Перейти на первую страницу. Имя пользователя, которое было последним в списке, должно стать первым. Проделать этот тест для полей “email” и “статус”.
- Перейти на страницу авторизации пользователя. Попробовать залогиниться с пустыми полями. Должна вывестись ошибка, что поля обязательны для заполнения или, что введенные данные не верные. Ввести в поле для имени пользователя “admin1”, в поле для пароля “321”. Должна вывестись ошибка о неправильных реквизитах доступа. Админский доступ не должен быть предоставлен. Ввести данные “admin” в поле для имени и “123” в поле для пароля. Авторизация должна пройти успешно. Должна отобразиться кнопка для выхода из профиля админа.
- Для созданной задачи проставить отметку “выполнено”. Перезагрузить страницу. Отредактировать текст задачи. Сохранить и перезагрузить страницу. Текст задачи должен быть тот, который ввели при редактировании. В общем списке задача должна отображаться уже с двумя отметками: "выполнено" и “отредактировано администратором”. Отметка “отредактировано администратором” должна появляться только в случае изменения текста в теле задачи.
- В общем списке задача должна отображаться со статусом задачи “выполнено”.
- Открыть параллельно приложение в новой вкладке. Разлогиниться в новой вкладке. В этой вкладке не должно быть возможности редактировать задачу. Вернуться в предыдущую вкладку. Отредактировать задачу и сохранить. Отредактированная задача не должна быть сохранена. Приложение должно запросить авторизацию.

---

Базовый url для запросов - https://uxcandy.com/~shapoval/test-task-backend/v2

Ожидаемый MIME-type для POST-запросов - multipart/form-data

Ответ сервера - в формате json.
Ответ может содержать два поля:

status - текстовая строка - "ok" в случае успешного запроса, "error" в случае ошибки
message - текстовая строка или ассоциативный массив - сообщение с результатами запроса (в случае успешного выполнения), сообщение об ошибке (в случае ошибки), поля может не быть или оно может быть пустым
Для всех ответов GET-параметр "developer" является обязательным.
Просьба указывать в этом параметре своё имя.
Если параметр не получен, будет возвращено сообщение об ошибке:

    {
        "status": "error",
        "message": "Не передано имя разработчика"
    }

Список задач (/):
Обратите внимание - есть разница между https://uxcandy.com/~shapoval/test-task-backend/v2?developer=Name и https://uxcandy.com/~shapoval/test-task-backend/v2/?developer=Name. Правильным является последний вариант.

Допустимые параметры (GET):

sort_field (id | username | email | status) - поле, по которому выполняется сортировка
sort_direction (asc | desc) - направление сортировки
page - номер страницы для пагинации
В ответе сервер в поле "message" передаёт два параметра - "tasks" (список задач на странице) и "total_task_count" (общее количество задач)

Пример ответа:

    {
        "status": "ok",
        "message": {
            "tasks": [
                {
                    "id": 1,
                    "username": "Test User",
                    "email": "test_user_1@example.com",
                    "text": "Hello, world!",
                    "status": 10,
                },
                {
                    "id": 3,
                    "username": "Test User 2",
                    "email": "test_user_2@example.com",
                    "text": "Hello from user 2!",
                    "status": 0,
                },
                {
                    "id": 4,
                    "username": "Test User 3",
                    "email": "test_user_3@example.com",
                    "text": "Hello from user 3!",
                    "status": 0,
                }
            ],
            "total_task_count": "5"
        }
    }

Добавление задачи (/create):
Обязательные параметры (POST):

username - текстовое поле - имя пользователя, который добавляет задачу
email - текстовое поле - email-адрес пользователя, который добавляет задачу, email-адрес должен быть валидным
text - текстовое поле - текст задачи
Пример запроса (jquery ajax):

    $(document).ready(function() {
        var form = new FormData();
        form.append("username", "Example");
        form.append("email", "example@example.com");
        form.append("text", "Some text");

        $.ajax({
            url: 'https://uxcandy.com/~shapoval/test-task-backend/v2/create?developer=Example',
            crossDomain: true,
            method: 'POST',
            mimeType: "multipart/form-data",
            contentType: false,
            processData: false,
            data: form,
            dataType: "json",
            success: function(data) {
                console.log(data);
            }
        });
    });

Пример ответа (успешное добавление):

    {
        "status": "ok",
        "message": {
            "id": 8,
            "username": "Example user",
            "email": "123@example.com",
            "text": "Some text",
            "status": 0
        }
    }

Пример ответа (ошибка при добавлении):

    {
        "status": "error",
        "message": {
            "username": "Поле является обязательным для заполнения",
            "email": "Неверный email",
            "text": "Поле является обязательным для заполнения"
        }
    }

Логин (/login):
Для проверки данных пользователя нужно в POST передать два поля - username и password. Значения этих полей можно найти в тексте задания.

В случае успешной авторизации в теле сообщения будет передан авторизационный токен, срок жизни которого - 1 день (24 часа).

Пример ответа (ошибка авторизации):

    {
        "status": "error",
        "message": {
            "username": "Поле является обязательным для заполнения",
            "password": "Неверный логин или пароль"
        }
    }

Пример ответа:

    {
        "status": "ok"
    }

Редактирование задачи (/edit/:id):
Редактирование доступно только для авторизованных пользователей (см логин). В качестве POST-параметра нужно передать авторизационный токен (в поле token). Время жизни токена авторизации - 24 часа.

Допустимые параметры редактирования:

text - тестовое поле - текст задачи
status - числовое поле - текущее состояние задачи
0 - задача не выполнена
1 - задача не выполнена, отредактирована админом
10 - задача выполнена
11 - задача отредактирована админом и выполнена
Пример ответа (ошибка авторизации):

    {
        "status": "error",
        "message": {
            "token": "Токен истёк"
        }
    }

Пример ответа:

    {
        "status": "ok"
    }
