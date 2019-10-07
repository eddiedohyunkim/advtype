console.log("chrome calendar is working!")

chrome.runtime.onMessage.addListener(gotMessage);

function gotMessage(message, sender, sendResponse) {
	console.log(message.txt);
	if (message.txt === "hello"){
		
		const style = document.getElementsByTagName('style');
		for(var i =0; i<style.length; i+=1;){
			const removeElements = (elms) => elms.forEach(el => el.remove());
			removeElements( style[i] );
		}

	}
}