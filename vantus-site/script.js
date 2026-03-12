const messages=[
{type:'ai',text:'Hi 👋 thanks for reaching out to Vantus.'},
{type:'ai',text:'Can I ask a few quick questions?'},
{type:'user',text:'Sure'},
{type:'ai',text:'What service are you looking for today?'},
{type:'user',text:'Website design'},
{type:'ai',text:'Great. What is your budget range?'},
{type:'user',text:'Around $3000'},
{type:'ai',text:'Perfect. Let me schedule a call for you.'}
]

let i=0

function showMessage(){

if(i>=messages.length) return

const chat=document.getElementById('chat')

const msg=document.createElement('div')
msg.classList.add('message')
msg.classList.add(messages[i].type)

msg.innerText=messages[i].text

chat.appendChild(msg)

chat.scrollTop=chat.scrollHeight


i++

setTimeout(showMessage,1200)

}

window.onload=showMessage
