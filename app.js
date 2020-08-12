document.addEventListener('DOMContentLoaded', function() {
  let elems = document.querySelectorAll('select');
  let instances = M.FormSelect.init(elems);
})

submit = document.querySelector('.btn');
submit.addEventListener('click', function() {
  let ava = true;
  let sop = Number(document.querySelector('.selectsop').value);
  if (!sop) ava = false;
  console.log(sop);
  let lor = Number(document.querySelector('.selectlor').value);
  if (!lor) ava = false;
  console.log(lor);
  let gre = Number(document.querySelector('#gre').value);
  if (!gre) ava = false;
  console.log(gre);
  let toefl = Number(document.querySelector('#toefl').value);
  if (!toefl) ava = false;
  console.log(toefl);
  let cgpa = Number(document.querySelector('#cgpa').value);
  if (!cgpa) ava = false;
  console.log(cgpa);
  let resex = -1;
  sel = document.getElementsByName('resex');
  if (sel[0].checked) resex = 1;
  else if (sel[1].checked) resex = 0;
  if (resex == -1) ava = false;
  console.log(resex);
  if (ava) {
    console.log('All available');
  } 
  else {

  }
});