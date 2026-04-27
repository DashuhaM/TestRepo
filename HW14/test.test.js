const axios = require("axios");

test("Check status", async () => {
    const response = await axios.get(
        "https://jsonplaceholder.typicode.com/comments"
    );
    expect(response.status).toBe(200);
});

test("Check email from First Comment", async () => {
    const response = await axios.get(
        "https://jsonplaceholder.typicode.com/comments"
    );
    const comment = response.data[0];

    expect(comment.email).toBe("Eliseo@gardner.biz");
});

test("Check that post name and postId", async () => {
    const response = await axios.get(
        "https://jsonplaceholder.typicode.com/comments"
    );
    const comment = response.data[44];

    expect(comment.name).toBe("autem illo facilis");
    expect(comment.postId).toBe(9);
});

test("Create post", async () => {
    const response = await axios.post(
        "https://jsonplaceholder.typicode.com/comments",

        {
            name: "NEW POST",
            email: "NEWPOST@joanny.ca",
            body: "NEW POST",
        }
    );

    expect(response.status).toBe(201);
});

test("Delete post", async () => {
    const response = await axios.delete(
        "https://jsonplaceholder.typicode.com/comments/44"
    );

    expect(response.status).toBe(200);
    console.log("✅ Deleted — status:", response.status);
});
