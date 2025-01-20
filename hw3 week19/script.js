let poisk= document.getElementById('poisk');
let Btn = document.getElementById('Btn');
let usersList = document.getElementById('usersList');
let message = document.getElementById('message');

async function fetchData() {
    try {
        const response = await fetch('https://67873274c4a42c916105d2fe.mockapi.io/api/onlineduken/users');
        const data = await response.json();
        return data;
    } catch (error) {
        message.textContent = 'Қате: Деректерді алу мүмкін болмады.';
        console.error('Fetch Error:', error);
    }
}

function displayData(users) {
    if (users.length === 0) {
        message.textContent = 'Ақпарат өкінішке орай табылмады!';
        usersList.innerHTML = '';
    } else {
        message.textContent = '';
        usersList.innerHTML = users.map(user => `
            <div class="card">
                <h3>${user.name}</h3>
                <p>${user.post}</p>
            </div>
        `).join('');
    }
}

Btn.addEventListener('click', async () => {
    const searchText = poisk.value.trim().toLowerCase();
    if (!searchText) {
        message.textContent = 'Іздеу үшін сөз енгізіңіз!';
        usersList.innerHTML = '';
        return;
    }

    const users = await fetchData();
    if (users) {
        const filteredUsers = users.filter(user => user.name.toLowerCase().includes(searchText));
        displayData(filteredUsers);
    }
});

fetchData().then(users => {
    if (users) {
        displayData(users);
    }
});
