<?php
// router.php
if (preg_match('/\.(?:png|jpg|jpeg|pdf)$/', $_SERVER["REQUEST_URI"])) {
    return false;
} else { 
    require_once('resolver.php');
}
?>