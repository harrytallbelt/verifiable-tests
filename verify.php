<?php

    $url_filename = urlencode($_POST['filename']);
    $url_code = urlencode($_POST['code']);
    $url_err = urlencode("");
    
    $url_parameters = "?task=$url_filename&code=$url_code";
    if ($url_err) {
        $url_parameters .= "&err=$url_err";
    } 
    
    header("Location: ./task.php" . $url_parameters);

// ^^^ temporary part 
// - - - - - - - - - 

    function ends_with(string $string, string $postfix) {
        $string_length = strlen($string);
        $postfix_length = strlen($postfix);
        
        if ($string_length < $postfix_length) {
            return FALSE;
        }

        return substr_compare($string, $postfix, $string_length - $postfix_length, $postfix_length) === 0;
    }   

    $meta_filename = "test_meta.txt";
    $meta = array_filter(explode("\n", file_get_contents($meta_filename)));

    $simplify_filename = "test.txt";
    $simplify_text_output = array_filter(explode("\n", `bin\simplify.exe -nosc $simplify_filename`));
    $simplify_output = array(); 
    
    foreach ($simplify_text_output as $index => $value) {
        if (ends_with($value, 'Valid')) {
            $simplify_output[$index] = TRUE;
        } elseif (ends_with($value, 'Invalid')) {
            $simplify_output[$index] = FALSE;
        } else {
            exit("Cannot parse Simplify's output: \"$value\"");
        }
    }

    $error_string = "";
    foreach ($simplify_output as $index => $value) {
        if (!$value) {
            $error_string .= '\n' . $meta[$index];
        }
    }
    
    $url_filename = urlencode($filename);
    $url_code = urlencode($_POST['code']);
    $url_err = urlencode($error_string);
    header("Location: ./task.php?task=$url_filename&code=$url_code&err=$url_err");
?>