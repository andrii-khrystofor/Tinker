export async function hashPassword(password: string) {
    if (!window.crypto.subtle) {
        console.error('Web Crypto API not supported');
        return;
    }
  
    const encoder = new TextEncoder();
    const data = encoder.encode(password);
    const hashBuffer = await window.crypto.subtle.digest('SHA-256', data) 
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
    return hashHex;
}
