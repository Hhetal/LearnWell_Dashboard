const Page = () => {
    const handleFrom = async (formData) => {
        "use server"
        console.log(formData)
        const username = formData.get("username")
        console.log("hello",username);
    };

    return(
        <div>
            <form action={handleFrom}>
                <input type="text" name="username" />
                <button>Send</button>
            </form>
        </div>
    );
};

export default Page;

//Inside these server action we can take any input value and sent it to are database