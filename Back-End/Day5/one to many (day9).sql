use intro_prisma;
select * from intro_prisma.schools;
INSERT INTO
    intro_prisma.schools (name, startAt,endAt, branchId, updateAt)
VALUES
    (
        "JCWD",
        DATE("2024-02-22"),
        DATE("2024-04-05"),
        1,
        now()
    );