DROP TABLE IF EXISTS
CREATE TABLE favorite_recipe (
    favorite_recipe_id INT AUTO_INCREMENT PRIMARY KEY,
    recipe_id INT,
    user_id INT,
    FOREIGN KEY (recipe_id) REFERENCES recipe(recipe_id),
    FOREIGN KEY (user_id) REFERENCES user(user_id)
);
