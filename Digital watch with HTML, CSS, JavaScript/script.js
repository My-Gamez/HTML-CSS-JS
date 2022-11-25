setInterval(() => {
    const date = new Date();
    const hour = date.getHours();
    const min = date.getMinutes();
    const sec = date.getSeconds();
    const day = date.toLocaleDateString();
    document.getElementById('time').innerText="Time: "+hour+" : "+min+" : "+sec;
    document.getElementById('date').innerText = "Date: "+day;
}, 1000);