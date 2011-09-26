<?php echo "This is data returned from the script" ?>
<?php if(!empty($_POST)): ?>
	Option Choosen: <?php echo $_POST['select']; ?>
<?php endif; ?>