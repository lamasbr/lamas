---
path: /teste/
date: 2020-07-04T03:38:15.967Z
title: Form test
description: Form test desc
---
<form name="contact" method="post" data-netlify="true" data-netlify-honeypot="bot-field" action="/blog/">
  
    <input type="hidden" name="bot-field">
    <input type="hidden" name="form-name" value="contact" />
    
    <p>
        <label for="nome">Seu nome: </label>
        <input type="text" name="nome" id="nome" />
    </p>

    <p>
        <label for="email">Seu email: </label>
        <input type="email" name="email" id="email" />
    </p>
    
    <p>
        <label>Your Role: </label>
        <select name="role[]" multiple>
            <option value="leader">Leader</option>
            <option value="follower">Follower</option>
        </select>
    </p>

    <p>
        <label for="mensagem">Mensagem: </label>
        <textarea name="mensagem" id="mensagem" cols="30" rows="10"></textarea>
    </p>

    <p>
        <input type="submit" value="Enviar" /> | <input type="reset" value="Redefinir" />
    </p>
</form>