<?php

namespace App\Filament\Resources;

use App\Filament\Resources\CertificationResource\Pages;
use App\Filament\Resources\CertificationResource\RelationManagers;
use App\Models\Certification;
use Filament\Forms;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Table;
use Illuminate\Support\Str;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletingScope;

class CertificationResource extends Resource
{
    protected static ?string $model = Certification::class;

    protected static ?string $navigationIcon = 'heroicon-o-rectangle-stack';

    public static function form(Form $form): Form
    {
        return $form
        ->schema([
            Forms\Components\TextInput::make('name')
                ->label('Certification Name')
                ->required(),
            Forms\Components\FileUpload::make('file_path')
            ->label('Certification PDF')
            ->disk('public')
            ->directory('certifications')
            ->acceptedFileTypes(['application/pdf'])
            ->maxSize(20480)
            ->preserveFilenames(false) // pakai nama yang kita hasilkan
            ->getUploadedFileNameForStorageUsing(function ($file, callable $get): string {
                // ambil nama dari input 'name' (karena create/upload bersamaan)
                $raw = $get('name') 
                    ?? (method_exists($file, 'getClientOriginalName') ? pathinfo($file->getClientOriginalName(), PATHINFO_FILENAME) : null)
                    ?? 'file';
        
                $slug = Str::slug($raw) ?: 'file';
        
                // dapatkan ekstensi (fallback ke pdf)
                $ext = null;
                if (method_exists($file, 'getClientOriginalExtension')) {
                    $ext = $file->getClientOriginalExtension();
                } elseif (method_exists($file, 'getClientOriginalName')) {
                    $ext = pathinfo($file->getClientOriginalName(), PATHINFO_EXTENSION);
                }
                $ext = $ext ?: 'pdf';
        
                return strtolower($slug . '.' . $ext);
            })
            ->nullable(),
        ]);
    }

    public static function table(Table $table): Table
{
    return $table
        ->columns([
            Tables\Columns\TextColumn::make('name')
                ->label('Certification Name')
                ->searchable()
                ->sortable(),
            Tables\Columns\TextColumn::make('file_path')
                ->label('PDF File')
                ->url(fn ($record) => $record->file_path ? asset('storage/' . $record->file_path) : null, true)
                ->openUrlInNewTab()
                ->toggleable(),
            Tables\Columns\TextColumn::make('created_at')
                ->dateTime()
                ->sortable(),
        ])
        ->filters([
            //
        ])
        ->actions([
            Tables\Actions\EditAction::make(),
        ])
        ->bulkActions([
            Tables\Actions\BulkActionGroup::make([
                Tables\Actions\DeleteBulkAction::make(),
            ]),
        ]);
}

    public static function getRelations(): array
    {
        return [
            //
        ];
    }

    public static function getPages(): array
    {
        return [
            'index' => Pages\ListCertifications::route('/'),
            'create' => Pages\CreateCertification::route('/create'),
            'edit' => Pages\EditCertification::route('/{record}/edit'),
        ];
    }
}
