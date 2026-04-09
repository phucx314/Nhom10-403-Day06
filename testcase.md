# 🧪 Bộ Test Cases — AI Voice Agent XanhSM
**Nhóm:** Nhom10-403 | **QA Lead:** P6 | **Ngày test:** 09/04/2026

---

## Hướng dẫn ghi log

Sau mỗi test case, điền vào cột kết quả:
- **Pass/Fail:** Pass = đúng hoặc hỏi lại đúng chỗ | Fail = điền sai / không phản hồi
- **Ghi chú:** Hành vi bất thường, độ trễ, lỗi UI

---

## Phân loại test

| Loại | Số câu | Mục tiêu |
|------|--------|----------|
| 🟢 Happy path | 5 | Thông tin đầy đủ, rõ ràng |
| 🟡 Thiếu thông tin | 4 | AI phải hỏi lại đúng chỗ |
| 🟠 Mơ hồ / nhiều nghĩa | 3 | AI xử lý địa điểm không rõ |
| 🔴 Giọng vùng miền / nhiễu | 3 | STT nhận dạng giọng khác nhau |

---

## 🟢 Happy Path (5 câu)

> Kỳ vọng: AI trích xuất đủ thông tin (điểm đón, điểm đến, loại xe), không hỏi lại

---

### TC-01
**Input (giọng nói):**
> "Đặt xe từ 122 Cầu Giấy đến Landmark 81, cho tôi xe VF e34"

**Kỳ vọng UI:** Hiện card xác nhận, không hỏi lại

| Trường | Kỳ vọng | AI output thực tế | Pass/Fail |
|--------|---------|-------------------|-----------|
| origin | 122 Cầu Giấy | | |
| destination | Landmark 81 | | |
| vehicle_type | VF e34 | | |
| Hành động | Hiện card xác nhận | | |

**Ghi chú:** _______________

---

### TC-02
**Input (giọng nói):**
> "Cho tôi đặt một chuyến xe từ nhà tôi ở Hoàng Mai đến sân bay Nội Bài, loại xe 7 chỗ"

| Trường | Kỳ vọng | AI output thực tế | Pass/Fail |
|--------|---------|-------------------|-----------|
| origin | Hoàng Mai | | |
| destination | Sân bay Nội Bài | | |
| vehicle_type | 7 chỗ | | |

**Ghi chú:** _______________

---

### TC-03
**Input (giọng nói):**
> "Tôi cần đi từ Vinhomes Smart City sang Mỹ Đình, lấy xe máy điện"

| Trường | Kỳ vọng | AI output thực tế | Pass/Fail |
|--------|---------|-------------------|-----------|
| origin | Vinhomes Smart City | | |
| destination | Mỹ Đình | | |
| vehicle_type | xe máy điện | | |

**Ghi chú:** _______________

---

### TC-04
**Input (giọng nói):**
> "Book xe ô tô từ Hồ Gươm về khách sạn Sofitel"

| Trường | Kỳ vọng | AI output thực tế | Pass/Fail |
|--------|---------|-------------------|-----------|
| origin | Hồ Gươm | | |
| destination | Khách sạn Sofitel | | |
| vehicle_type | ô tô | | |

**Ghi chú:** _______________

---

### TC-05
**Input (giọng nói):**
> "Đặt VF e34 từ trường Đại học Bách Khoa đến bến xe Giáp Bát"

| Trường | Kỳ vọng | AI output thực tế | Pass/Fail |
|--------|---------|-------------------|-----------|
| origin | Đại học Bách Khoa | | |
| destination | Bến xe Giáp Bát | | |
| vehicle_type | VF e34 | | |

**Ghi chú:** _______________

---

## 🟡 Thiếu thông tin (4 câu)

> Kỳ vọng: AI **hỏi lại đúng trường còn thiếu**, không tự điền bừa

---

### TC-06 — Thiếu điểm đón
**Input (giọng nói):**
> "Đặt xe đi Vincom Bà Triệu"

**Kỳ vọng:** AI hỏi lại điểm đón
> *"Bạn muốn được đón từ đâu ạ?"*

| Kiểm tra | Kỳ vọng | Thực tế | Pass/Fail |
|----------|---------|---------|-----------|
| AI hỏi lại? | Có | | |
| Hỏi đúng trường? | origin | | |
| AI tự điền origin? | Không | | |

**Ghi chú:** _______________

---

### TC-07 — Thiếu điểm đến
**Input (giọng nói):**
> "Cho xe đến đón tôi ở 45 Nguyễn Huệ"

**Kỳ vọng:** AI hỏi lại điểm đến
> *"Bạn muốn đến đâu ạ?"*

| Kiểm tra | Kỳ vọng | Thực tế | Pass/Fail |
|----------|---------|---------|-----------|
| AI hỏi lại? | Có | | |
| Hỏi đúng trường? | destination | | |

**Ghi chú:** _______________

---

### TC-08 — Thiếu cả điểm đón lẫn loại xe
**Input (giọng nói):**
> "Tôi muốn đặt xe đi Hà Đông"

**Kỳ vọng:** AI hỏi lại điểm đón trước (ưu tiên thông tin quan trọng nhất)

| Kiểm tra | Kỳ vọng | Thực tế | Pass/Fail |
|----------|---------|---------|-----------|
| AI hỏi lại? | Có | | |
| Hỏi đúng trường trước? | origin | | |
| AI tự điền bừa? | Không | | |

**Ghi chú:** _______________

---

### TC-09 — Không rõ loại xe
**Input (giọng nói):**
> "Đặt xe từ Giảng Võ đến Times City"

**Kỳ vọng:** AI hỏi loại xe hoặc đề xuất mặc định
> *"Bạn muốn dùng loại xe nào? VF e34, xe 7 chỗ, hay xe máy điện?"*

| Kiểm tra | Kỳ vọng | Thực tế | Pass/Fail |
|----------|---------|---------|-----------|
| AI hỏi hoặc đề xuất? | Có | | |
| Tự điền vehicle_type? | Không (hoặc đề xuất để xác nhận) | | |

**Ghi chú:** _______________

---

## 🟠 Mơ hồ / nhiều nghĩa (3 câu)

> Kỳ vọng: AI nhận ra địa điểm không rõ và hỏi xác nhận, không tự chọn

---

### TC-10 — Địa điểm có nhiều chi nhánh
**Input (giọng nói):**
> "Đặt xe từ nhà đến Vincom"

**Kỳ vọng:** AI hỏi rõ Vincom nào
> *"Bạn muốn đến Vincom nào? Vincom Bà Triệu, Vincom Royal City, hay Vincom Times City?"*

| Kiểm tra | Kỳ vọng | Thực tế | Pass/Fail |
|----------|---------|---------|-----------|
| AI nhận ra mơ hồ? | Có | | |
| Hỏi clarify? | Có | | |
| Tự điền một Vincom bừa? | Không | | |

**Ghi chú:** _______________

---

### TC-11 — Địa danh chung chung
**Input (giọng nói):**
> "Đưa tôi ra chợ"

**Kỳ vọng:** AI hỏi cụ thể chợ nào hoặc địa chỉ

| Kiểm tra | Kỳ vọng | Thực tế | Pass/Fail |
|----------|---------|---------|-----------|
| AI hỏi clarify? | Có | | |
| Tự điền destination? | Không | | |

**Ghi chú:** _______________

---

### TC-12 — Tên địa điểm tiếng lóng / viết tắt
**Input (giọng nói):**
> "Đặt xe từ BK đến ĐH Ngoại Thương"

> *"BK" = Bách Khoa — AI cần nhận ra hoặc hỏi xác nhận*

| Kiểm tra | Kỳ vọng | Thực tế | Pass/Fail |
|----------|---------|---------|-----------|
| AI hiểu "BK" = Bách Khoa? | Có hoặc hỏi lại | | |
| destination nhận đúng? | ĐH Ngoại Thương | | |

**Ghi chú:** _______________

---

## 🔴 Giọng vùng miền / nhiễu (3 câu)

> Kỳ vọng: STT nhận dạng được, nếu sai thì AI phải hỏi xác nhận thay vì điền sai

> ⚠️ Lưu ý: Nếu không có người thật đọc giọng vùng miền, có thể **mô phỏng bằng text input** với cách viết đặc trưng

---

### TC-13 — Giọng miền Nam (mô phỏng)
**Input (text mô phỏng giọng Nam):**
> "Đặt xe từ Bình Dương dzìa Sài Gòn, xe 4 chỗ nha"

> *"dzìa" = "về", "Sài Gòn" = TP.HCM — test STT + NLU*

| Kiểm tra | Kỳ vọng | Thực tế | Pass/Fail |
|----------|---------|---------|-----------|
| origin nhận đúng? | Bình Dương | | |
| destination nhận đúng? | Sài Gòn / TP.HCM | | |
| vehicle_type? | xe 4 chỗ | | |

**Ghi chú:** _______________

---

### TC-14 — Câu nói nhanh, nuốt chữ
**Input (giọng nói nhanh):**
> "Đặt xe từ cầu giấy đến mỹ đình xe ef e ba tư"

> *"ef e ba tư" = cách đọc nhanh của "VF e34"*

| Kiểm tra | Kỳ vọng | Thực tế | Pass/Fail |
|----------|---------|---------|-----------|
| origin? | Cầu Giấy | | |
| destination? | Mỹ Đình | | |
| vehicle_type? | VF e34 (hoặc hỏi lại) | | |

**Ghi chú:** _______________

---

### TC-15 — Có tiếng ồn / nói lại giữa chừng
**Input (giọng nói):**
> "Đặt xe từ... ừm... từ Nguyễn Trãi đến... đến Hồ Tây, cho tôi xe máy"

> *Test khả năng xử lý câu ngập ngừng, có filler words*

| Kiểm tra | Kỳ vọng | Thực tế | Pass/Fail |
|----------|---------|---------|-----------|
| Bỏ qua filler "ừm"? | Có | | |
| origin? | Nguyễn Trãi | | |
| destination? | Hồ Tây | | |
| vehicle_type? | xe máy điện | | |

**Ghi chú:** _______________

---

## 📊 Bảng tổng hợp kết quả

| TC | Loại | Pass | Fail | Ghi chú nhanh |
|----|------|------|------|---------------|
| TC-01 | Happy | | | |
| TC-02 | Happy | | | |
| TC-03 | Happy | | | |
| TC-04 | Happy | | | |
| TC-05 | Happy | | | |
| TC-06 | Thiếu info | | | |
| TC-07 | Thiếu info | | | |
| TC-08 | Thiếu info | | | |
| TC-09 | Thiếu info | | | |
| TC-10 | Mơ hồ | | | |
| TC-11 | Mơ hồ | | | |
| TC-12 | Mơ hồ | | | |
| TC-13 | Vùng miền | | | |
| TC-14 | Vùng miền | | | |
| TC-15 | Vùng miền | | | |
| **Tổng** | | **/15** | **/15** | |

---

## 🚨 Bug log (điền khi phát hiện lỗi)

| # | TC liên quan | Mô tả lỗi | Mức độ | Đã báo P4/P5? |
|---|-------------|-----------|--------|---------------|
| 1 | | | 🔴 Critical / 🟡 Major / 🟢 Minor | |
| 2 | | | | |
| 3 | | | | |

---

## ✅ Kết luận test

- **Pass rate:** ___/15 (___%)
- **Critical bugs:** ___
- **Đề xuất trước demo:**