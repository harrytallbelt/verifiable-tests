<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8" />
        <title>Список завдань</title>
    </head>
    <body>
        <ol>
            <?php
                foreach (glob('./tasks/*.json') as $filename) {
                    $contents = file_get_contents($filename);
                    $task = json_decode($contents, true);

                    if ($task != null && array_key_exists('name', $task)) {
                        $encoded_filename = urlencode($filename);
                        $task_name = $task['name'];
                        echo "<li><a href=\"./task.php?task=$encoded_filename\"> $task_name </a></li>";
                    } else {
                        // TODO: log an error?
                    }
                }
            ?>
        </ol>
    </body>
</html>