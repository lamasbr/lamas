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
        <label for="nome">Seu nome: 
        <input type="text" name="nome" id="nome"></label>
    </p>

    <p>
        <label for="email">Seu email: 
        <input type="email" name="email" id="email"></label>
    </p>
    
    <p>
        <label>Your Role: <select name="role[]" multiple>
            <option value="leader">Leader</option>
            <option value="follower">Follower</option>
        </select></label>
    </p>

    <p>
        <label for="mensagem">Mensagem: 
        <textarea name="mensagem" id="mensagem" cols="30" rows="10"></textarea></label>
    </p>

    <p>
        <button type="submit"></button> | <button type="reset"></button>
    </p>
</form>