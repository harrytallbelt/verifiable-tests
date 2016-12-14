<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8" />
        <?php
            function task_is_valid($task) {
                if ($task == null
                    || !array_key_exists('name', $task)
                    || !array_key_exists('description', $task)
                    || !array_key_exists('human_readable_precondition', $task)
                    || !array_key_exists('simplify_precondition', $task)
                    || !array_key_exists('human_readable_postcondition', $task)
                    || !array_key_exists('simplify_postcondition', $task)) {
                        return FALSE;
                }
                
                if (array_key_exists('human_readable_loop_invariant', $task)
                    && array_key_exists('simplify_loop_invariant', $task)
                    && array_key_exists('human_readable_boundary_function', $task)
                    && array_key_exists('simplify_boundary_function', $task)) {
                        return TRUE;
                } 
                    
                if (!array_key_exists('human_readable_loop_invariant', $task)
                    && !array_key_exists('simplify_loop_invariant', $task)
                    && !array_key_exists('human_readable_boundary_function', $task)
                    && !array_key_exists('simplify_boundary_function', $task)) {
                        return TRUE;
                }

                return FALSE;
            }

            if (!array_key_exists('task', $_GET)) {
                exit('"task" parameter is not found.');
            }

            $contents = file_get_contents($_GET['task']);
            if ($contents === FALSE) {
                exit('Task ' . $_GET['task'] . ' is not found.');
            }

            $task = json_decode($contents, true);
            if (!task_is_valid($task)) {
                exit('Task ' . $_GET['task'] . ' is not valid.');
            }

            echo "<title>", $task['name'], "</title>";
            echo "</head> <body>";

            echo "<h3>", htmlentities($task['name']), "</h3>";
            echo "<table border=\"0\">";
            echo "<tr><td> Опис завдання: </td><td>", htmlentities($task['description']), "</td></tr>";
            echo "<tr><td> Передумова: </td><td>", htmlentities($task['human_readable_precondition']), "</td></tr>";
            echo "<tr><td> Постумова: </td><td>", htmlentities($task['human_readable_postcondition']), "</td></tr>";
            if (array_key_exists('human_readable_loop_invariant', $task)) {
                echo "<tr><td> Інваріант циклу: </td><td>", htmlentities($task['human_readable_loop_invariant']), "</td></tr>";
                echo "<tr><td> Обмежуюча функція циклу: </td><td>", htmlentities($task['human_readable_boundary_function']), "</td></tr>";
            }
            echo "</table>";

            echo "<form action=\"./verify.php\" method=\"POST\">";
            echo "<input type=\"hidden\" name=\"filename\" value=\"", $_GET['task'], "\" />";
            echo "<p>Введіть код рішення задачі у текстове поле:</p>";
            $code = isset($_GET['code']) ? $_GET['code'] : "";
            echo "<p><textarea name=\"code\" rows=\"15\" cols=\"80\">", $code, "</textarea></p>";
            echo "<p><input type=\"submit\" value=\"Перевірити\" /></p>";
            echo "</form>";

            if (isset($_GET['err'])) {
                echo "Программа не відповідає вимогам у таких місцях:";
                $errors = array_filter(explode('\n', $_GET['err']));
                echo "<ul>";
                foreach ($errors as $error) {
                    echo "<li>$error</li>";
                }
                echo "</ul>";
            }
        ?>
        </table>
    </body>
</html>