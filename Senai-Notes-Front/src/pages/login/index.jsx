<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login - Senai Notes</title>
    <link rel="stylesheet" href="login.css">
</head>
<body>


  <div class="login-box">
    <img src="../../assets/imgs/logowhite.png" alt="Logo Senai Notes" class="logo">
    <p class="subtitle">Welcome to Note</p>
    <p class="instruction">Please log in to continue</p>

    <form>
      <label for="email">Email Address</label>
      <input type="email" id="email" placeholder="email@example.com" required>

      <label for="password">Password <a href="#" class="forgot">Forgot</a></label>
      <input type="password" id="password" required>

      <button type="submit">Login</button>
    </form>

    <p class="signup">No account yet? <a href="#">Sign Up</a></p>
  </div>
    
</body>
</html>