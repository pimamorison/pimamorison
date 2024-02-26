<!DOCTYPE html>
<html>
<head>
<title>Page Title</title>
<link rel="stylesheet" href="styles.css">
<script src="script.js"></script>
</head>
<body>

    <?php
        echo "Hello world"
    ?>
    <h1>This is a Heading</h1>
    <h2><a href="blobs/blobs.html">Click this to see some bouncing balls</h2>
    <p>This is a paragraph. With a
        <div style="background-color: green;padding-left:10px; margin:auto; width:500px">
            <a href="link1.html">
                Link to another page
            </a>
            (inside a div!)
    </div>
    </p>

    <hr>

    <p>
        Another paragraph, with an image embedded in it of me holding a <b>fish</b>. <br>
        You can press it! <br>
        <a href="img.html"; title="Don't be afraid to click">
            <img src="fish.jpg">
        </a>
    </p>

    <div style="width:auto; text-align: center;">
        The following divs will float left to each other.
    </div>
    <div class="cardcontainer">
        <div class="card">Card 1</div>
        <div class="card">Card 2</div>
        <div class="card">Card 3</div>
    </div>
    <div style="width:auto; text-align: center;">
        <button type="button" onclick="changeCardColor()">
            Press this to change card color
        </button>
    </div>


</body>
</html> 