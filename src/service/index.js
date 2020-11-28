class ApiService {
    async getResource() {
        const res = await fetch(url);
        if (!res.ok) {
            throw new Error(`Coukd not fetch ${url}` +
                `, received ${res.status}`)
        }
        return await res.json();
    }

    getAllPost() {
        return this.getResource(`https://jovid-nodeapp.herokuapp.com/posts.get`)
    }

    getPost(id) {
        return this.getResource(`https://jovid-nodeapp.herokuapp.com/posts.getById?id=${id}`)
    }
}

const sapi = new ApiService();

sapi.getAllPost().then((body) => {
    console.log(body);
})