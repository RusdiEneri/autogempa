# 🌍 AutoGempa — Informasi Gempa Terkini Indonesia

> Monitor gempa bumi real-time untuk wilayah Indonesia. Data diambil otomatis dari **BMKG** setiap 5 menit oleh GitHub Actions, lalu ditampilkan lengkap di README ini beserta peta guncangannya (shakemap).

🕒 **Update otomatis terakhir:** Jumat, 25 September 2026 pukul 20.57.27

---

## 🚨 Gempa Terkini

| Parameter | Detail |
| --- | --- |
| 📊 **Magnitudo** | M 2.4 |
| 📍 **Wilayah** | Pusat gempa berada di darat 10 km selatan Kab. Cianjur |
| 🕒 **Waktu** | 25 Sep 2026, 15:04:42 WIB |
| 🧭 **Koordinat** | -6.90,107.11 |
| 📏 **Kedalaman** | 7 km |
| 🌊 **Potensi** | Gempa ini dirasakan untuk diteruskan pada masyarakat |
| 📡 **Dirasakan** | II - III Kota Cianjur, II - III Cibeber, II - III Warungkondang |
| 🔗 **Sumber** | [BMKG — InfoGempa Realtime](https://www.bmkg.go.id/gempabumi) |

### 🗺️ Peta Guncangan (Shakemap)

![Peta Guncangan (Shakemap) BMKG](assets/shakemap.jpg)

---

## 📜 Riwayat 8 Gempa Terakhir

| Waktu | Magnitudo | Wilayah | Kedalaman | Potensi |
| --- | --- | --- | --- | --- |
| 25 Sep 2026 15:04:42 WIB | **M 2.4** | Pusat gempa berada di darat 10 km selatan Kab. Cianjur | 7 km | Gempa ini dirasakan untuk diteruskan pada masyarakat |
| 25 Sep 2026 04:01:35 WIB | **M 3.7** | Pusat gempa berada di darat 17 km Timur Jantho Aceh Besar | 7 km | Gempa ini dirasakan untuk diteruskan pada masyarakat |
| 24 Sep 2026 10:30:28 WIB | **M 4.6** | Pusat gempa berada di laut 57 km timur Kota Bima | 12 km | Gempa ini dirasakan untuk diteruskan pada masyarakat |
| 23 Sep 2026 19:16:56 WIB | **M 1.8** | Pusat gempa berada di darat 24 km barat daya Lembata | 12 km | Gempa ini dirasakan untuk diteruskan pada masyarakat |
| 23 Sep 2026 09:02:44 WIB | **M 4.7** | Pusat gempa berada di laut 48 km utara Ruteng-Manggarai | 9 km | Gempa ini dirasakan untuk diteruskan pada masyarakat |
| 23 Sep 2026 05:27:42 WIB | **M 4.6** | Pusat gempa berada di laut 38 Km Selatan Sumur | 20 km | Gempa ini dirasakan untuk diteruskan pada masyarakat |
| 23 Sep 2026 00:20:14 WIB | **M 4.2** | Pusat gempa berada di laut 49 km Barat Laut Ruteng, Manggarai | 7 km | Gempa ini dirasakan untuk diteruskan pada masyarakat |
| 22 Sep 2026 10:36:27 WIB | **M 4.8** | Pusat gempa berada di laut 31 km timur laut Mbay, Nagekeo | 14 km | Gempa ini dirasakan untuk diteruskan pada masyarakat |

---

## 🛠️ Cara Kerja Repository Ini

- Workflow `.github/workflows/bmkg.yml` berjalan otomatis setiap **5 menit**.
- `src/index.js` mengambil data dari `https://data.bmkg.go.id/DataMKG/TEWS/autogempa.json`.
- Jika terdeteksi gempa **baru**:
  - `README.md` di-generate ulang (info detail + shakemap),
  - gambar shakemap disimpan ke `assets/shakemap.jpg`,
  - riwayat disimpan di `data/history.json` (maksimal 15 gempa),
  - semua di-commit & push otomatis ke branch `main`.
- Notifikasi **Discord** tetap dikirim jika magnitudo ≥ `MIN_MAGNITUDE`.

---

<div align="center">

Dibuat dengan ❤️ oleh [RusdiEneri](https://github.com/RusdiEneri) • Sumber data: [BMKG](https://www.bmkg.go.id/)

_README ini dibuat otomatis oleh GitHub Actions — jangan edit manual._

</div>
