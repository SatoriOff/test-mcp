// Калькулятор: открываемость 40%, CTR от открытий 12%, конверсия клика в покупку зависит от отрасли
const fmt = n => Math.round(n).toLocaleString('ru-RU');

function calc() {
  const sent = +document.getElementById('cSent').value || 0;
  const check = +document.getElementById('cCheck').value || 0;
  const conv = +document.getElementById('cInd').value;
  const opens = sent * 0.4;
  const clicks = opens * 0.12;
  const revenue = clicks * conv * check;
  document.getElementById('oOpen').textContent = fmt(opens);
  document.getElementById('oClick').textContent = fmt(clicks);
  document.getElementById('oRev').textContent = fmt(revenue) + ' ₽';
}
document.getElementById('calcForm').addEventListener('input', calc);
calc();

// Форма заявки: пока без отправки на сервер, только подтверждение
document.getElementById('leadForm').addEventListener('submit', e => {
  e.preventDefault();
  e.target.reset();
  document.getElementById('leadOk').hidden = false;
});

document.getElementById('year').textContent = new Date().getFullYear();

// Закрывать мобильное меню после клика по ссылке
document.querySelectorAll('#navLinks a').forEach(a =>
  a.addEventListener('click', () => document.getElementById('navLinks').classList.remove('open'))
);
