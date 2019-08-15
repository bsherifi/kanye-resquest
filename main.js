const app = new Vue({
    el: "#app",
    data: {
        quotes:[],
    },
    mounted() {
        fetch("https://api.kanye.rest")
            .then(response => response.json())
            .then((data) => {
                this.quotes = data;
            })
    },
    template:
    `
    <div>
        <p v-for="quote in quotes">"{{quote}}"</p>
    </div>
    `,
});