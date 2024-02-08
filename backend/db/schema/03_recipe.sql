DROP TABLE IF EXISTS recipe CASCADE;
CREATE TABLE recipe (
    recipe_id SERIAL PRIMARY KEY,
    ingredients TEXT,
    cooking_time_minutes INT,
    description TEXT,
    category_id INT,
    user_id INT,
    FOREIGN KEY (category_id) REFERENCES category(category_id),
    FOREIGN KEY (user_id) REFERENCES users(user_id)
);
