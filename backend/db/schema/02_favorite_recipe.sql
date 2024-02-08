DROP TABLE IF EXISTS favorite_recipe CASCADE;
CREATE TABLE favorite_recipe (
    favorite_recipe_id SERIAL PRIMARY KEY,
    recipe_id INT,
    user_id INT,
    FOREIGN KEY (recipe_id) REFERENCES recipe(recipe_id),
    FOREIGN KEY (user_id) REFERENCES users(user_id)
);
