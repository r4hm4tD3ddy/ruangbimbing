# ruangbimbing.my.id — situs pendukung produksi

## Logo seluruh halaman informasi — 2 November 2026

Pembaca logo publik dipusatkan pada `assets/branding.js`, dipakai homepage,
`/aplikasi/`, `/privasi/`, `/ketentuan/` dan `/login/`. Semua marker TA menjadi
logo portal tersimpan, dengan tempat kosong saat menunggu serta fallback bila
logo gagal/kosong. Ukuran header44px dan login76px memakai object-fit:contain.
Pembacaan publik tanpa kredensial, timeout12 detik dan validasi data URL tetap.
Blok autentikasi login dibandingkan literal: tidak berubah. Tidak mengubah
konten kebijakan/ketentuan, callback OAuth atau Apps Script untuk perubahan ini.
Source/sintaks dan pratinjau statis Ketentuan diperiksa; login tidak dijalankan.

## Pembaruan logo halaman login — 2 November 2026

Halaman `/login/` membaca `mode=branding-publik` dari SERVER produksi yang
sudah tersedia. Logo portal diambil sebagai data URL gambar PNG/JPEG/WebP
tervalidasi, tanpa cookie/kredensial Google. Pembacaan publik memperoleh
HTTP200, valid:true, logo tersedia dan Access-Control-Allow-Origin:*.
Logo memakai object-fit:contain agar tidak terpotong lingkaran bawaan.
Tempat logo kosong selama pemuatan; TA hanya fallback bila logo kosong/gagal.
Fetch dibatasi12 detik dan terpisah dari inisialisasi Google Sign-In.

Kode Client ID, inisialisasi GIS, callback, form ID token serta target SERVER
tidak diubah. Tidak mengubah Apps Script SERVER298/AUTH299, database, scope
OAuth atau pengaturan Google Cloud. Perbaikan tampilan produksi tetap dapat
dilakukan melalui source/PR dan publikasi Pages. Pemeriksaan source/HTTP dan
pratinjau visual dicatat terpisah dari pengujian login; tidak menjalankan tes.

Riwayat penyiapan awal di bawah ini bukan status deployment login terbaru.

Sumber halaman disalin dari repository milik pengguna
`r4hm4tD3ddy/sistem-asistensi-gis-diagnostic`, commit `d80ee58`.
Repository terpisah ini menyiapkan hostname baru tanpa mengubah canonical
GitHub Pages atau JavaScript login yang sedang dipakai produksi.

| Path | Isi |
|---|---|
| `/` dan `/aplikasi/` | Informasi aplikasi dan tautan portal Apps Script produksi |
| `/privasi/` | Penggunaan data, penyimpanan dan pencabutan koneksi |
| `/ketentuan/` | Ketentuan penggunaan |
| `/login/` | Login GIS produksi; logo mengikuti branding publik portal |

Nama aplikasi tetap Sistem Pembimbingan Tugas Akhir. Domain tidak otomatis
mengubah nama/brand aplikasi, database, Client ID atau callback Drive.

## Domain dan DNS

Pengguna mengonfirmasi domain ruangbimbing.my.id dengan DNS Cloudflare.
Screenshot Search Console menunjukkan kepemilikan berhasil diverifikasi lewat
penyedia domain. TXT Google terdeteksi pada DNS publik2 November2026; jangan
menghapus record ownership tersebut.

Source situs berisi CNAME ruangbimbing.my.id, `.nojekyll`, HTML serta CSS statis.
GitHub Pages dikonfigurasi dari branch main/root. CNAME dalam source ini relevan
untuk branch publishing, berbeda dari situs login lama yang menggunakan workflow.
Pengikatan hostname harus dikonfirmasi di Pages sebelum pengguna mengarahkan DNS.

Record web yang disiapkan, belum dianggap terpasang hanya dari dokumen ini:

| Type | Name | Content | Proxy | TTL |
|---|---|---|---|---|
| A | @ | 185.199.108.153 | DNS only | Auto |
| A | @ | 185.199.109.153 | DNS only | Auto |
| A | @ | 185.199.110.153 | DNS only | Auto |
| A | @ | 185.199.111.153 | DNS only | Auto |
| CNAME | www | r4hm4td3ddy.github.io | DNS only | Auto |

Setelah record terlihat, periksa Pages/DNS/certificate serta HTTP/HTTPS.
Aktifkan enforce HTTPS setelah sertifikat disetujui. Jangan mengalihkan login
aplikasi ke hostname baru sebelum HTTPS dan Google authorized origin siap.

## Batas rilis ini

Homepage root memakai konten `/aplikasi/` dengan penyesuaian tautan relatif.
Halaman privasi/ketentuan/CSS serta isi script login identik sumber.
Tidak memuat token, Secret, database atau form baru pada halaman informasi.
Tidak mengubah Apps Script SERVER296/AUTH297 atau situs login lama.
Pemeriksaan berupa source/tautan dan metadata publikasi, bukan tes/login/OAuth.
Pengaturan origin/login dan Branding Google dilakukan setelah domain/HTTPS siap.
Keberhasilan DNS/sertifikat/publikasi harus dicatat dari hasil aktual, bukan
disimpulkan dari keberadaan file CNAME atau screenshot ownership Google saja.

Source aplikasi serta checkpoint lintas chat:
https://github.com/r4hm4tD3ddy/sistem-asistensi-skripsi

Acuan DNS: https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site
