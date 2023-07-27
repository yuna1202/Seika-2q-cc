// import Swiper bundle with all modules installed
import Swiper from 'swiper/bundle';

// import styles bundle
import 'swiper/css/bundle';

const swiper = new Swiper('.swiper-1', {
	// Optional parameters
	direction: 'horizontal',
	loop: true,
    
	// If we need pagination
	pagination: {
	  el: '.swiper-pagination',
	},
    
	// Navigation arrows
	navigation: {
	  nextEl: '.swiper-button-next',
	  prevEl: '.swiper-button-prev',
	},
    
	// And if we need scrollbar
	scrollbar: {
	  el: '.swiper-scrollbar',
	},
    });


    let titleElement;
    swiper.on('slideChange', function () {
	console.log('slide changed');

    	let swiperTitle = document.getElementById('swiper-title');
	if(titleElement){
		titleElement.remove();
	}
	const tilteText = 'スライド' + swiper.realIndex + 'を表示しています';
	titleElement = document.createTextNode(tilteText);
	
    	swiperTitle.appendChild(titleElement);
    });

    const swiper2 = new Swiper('.swiper-2', {
	// Optional parameters
	direction: 'horizontal',
	loop: true,
    
	// If we need pagination
	pagination: {
	  el: '.swiper-pagination',
	},
    
	// Navigation arrows
	navigation: {
	  nextEl: '.swiper-button-next',
	  prevEl: '.swiper-button-prev',
	},
    
	// And if we need scrollbar
	scrollbar: {
	  el: '.swiper-scrollbar',
	},
    });

    const titleList =[
	'INI 1st single 『 A 』',
	'INI 2nd single 『 I 』',
	'INI 3rd single 『 M 』',
	'INI 4th single 『 DROP that 』',
    ];

    const swiperTitle2 = document.getElementById('swiper-title-2');
    const tilteText2 = titleList[swiper2.realIndex];
    let titleElement2 = document.createTextNode(tilteText2);
    swiperTitle2.appendChild(titleElement2);

    swiper2.on('slideChange', function(){
	console.log('slide changed');

	if(titleElement2){
		titleElement2.remove();
	}
	const tilteText = titleList[swiper2.realIndex]
	titleElement2 = document.createTextNode(tilteText)

	swiperTitle2.appendChild(titleElement2);
    });
    

import JustValidate from 'just-validate';
const validator = new JustValidate('#basic_form');

	validator
	.addField('#basic_name', [
	{
		rule: 'required',
		errorMessage: '必須入力項目です。',
	},
	{
		rule: 'minLength',
		value: 3,
		errorMessage: '3文字以上入力してください。',
	},
	{
		rule: 'maxLength',
		value: 15,
		errorMessage: '15文字以下で入力してください。',
	},
	])
	.addField('#basic_email', [
	{
		rule: 'required',
		errorMessage: '必須入力項目です。',
	},
	{
		rule: 'required',
	},
	{
		rule: 'email',
	},
	])
	.addField('#basic_password', [
	{
		rule: 'required',
		errorMessage: '必須入力項目です。',
	},
	{
		rule: 'password',
	},
	])
	.addField('#basic_age', [
	{
		rule: 'required',
		errorMessage: '必須入力項目です。',
	},
	{
		rule: 'number',
	},
	{
		rule: 'minNumber',
		value: 18,
	},
	{
		rule: 'maxNumber',
		value: 150,
	},
	])
	.addField('#basic_address', [
	{
		rule: 'required',
		errorMessage: '必須入力項目です。',
	},
	])
	.onSuccess(onSuccess);

	function onSuccess(event) {
		let formData = new FormData(event.target);
		console.log(formData.get("name"));
		console.log(formData.get("email"));
		console.log(formData.get("password"));
		console.log(formData.get("age"));
		console.log(formData.get("address"));
	}