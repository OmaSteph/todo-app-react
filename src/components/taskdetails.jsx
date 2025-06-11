function DetailsPage() {
    const taskTitle = task;
    const taskDesc = description;

    return (
        <div className="task-details">
            <div class="user-info">
                    <h2>First Name </h2>
                    <h3 id="Name1"></h3>
                </div>
                <div class="user-info">
                    <h2>Last Name </h2>
                    <h3 id="name2"></h3>
                </div>
                <div class="user-info">
                    <h2>Email </h2>
                    <h3 id="Username"></h3>
                </div>
                <div class="user-info">
                    <h2>Password </h2>
                    <h3 id="password"></h3>
                </div>
                <button class="buttons">back to home page</button>
        </div>
    )
}