import { test, expect } from '@playwright/test';

test('Login com sucesso redireciona para a dashboard', async ({ page }) => {
  // Acessa a página de login
  await page.goto('https://practicetestautomation.com/practice-test-login/');

  // Preenche os campos de login
  await page.fill('#username', 'student');
  await page.fill('#password', 'Password123');

  // Garante que o botão está visível antes de clicar
  const submitButton = page.locator('button#submit');
  await submitButton.waitFor({ state: 'visible' });

  // Clica no botão de login
  await submitButton.click();

  // Aguarda a URL mudar para a dashboard
  await expect(page).toHaveURL('https://practicetestautomation.com/logged-in-successfully/');

  // Verifica se contém texto da dashboard
  await expect(page.locator('h1')).toHaveText('Logged In Successfully');
});