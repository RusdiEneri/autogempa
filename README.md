# 🌍 AutoGempa — Informasi Gempa Terkini Indonesia

> Monitor gempa bumi real-time untuk wilayah Indonesia. Data diambil otomatis dari **BMKG** setiap 5 menit oleh GitHub Actions, lalu ditampilkan lengkap di README ini beserta peta guncangannya (shakemap).

🕒 **Update otomatis terakhir:** Rabu, 23 September 2026 pukul 23.52.21

---

## 🚨 Gempa Terkini

| Parameter | Detail |
| --- | --- |
| 📊 **Magnitudo** | M 1.8 |
| 📍 **Wilayah** | Pusat gempa berada di darat 24 km barat daya Lembata |
| 🕒 **Waktu** | 23 Sep 2026, 19:16:56 WIB |
| 🧭 **Koordinat** | -8.51,123.27 |
| 📏 **Kedalaman** | 12 km |
| 🌊 **Potensi** | Gempa ini dirasakan untuk diteruskan pada masyarakat |
| 📡 **Dirasakan** | II-III Kab. Lembata |
| 🔗 **Sumber** | [BMKG — InfoGempa Realtime](https://www.bmkg.go.id/gempabumi) |

### 🗺️ Peta Guncangan (Shakemap)

![Peta Guncangan (Shakemap) BMKG](assets/shakemap.jpg)

---

## 📜 Riwayat 5 Gempa Terakhir

| Waktu | Magnitudo | Wilayah | Kedalaman | Potensi |
| --- | --- | --- | --- | --- |
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
